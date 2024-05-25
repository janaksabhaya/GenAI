import ReactButton from "@/components/ui/ReactButton";
import ReactDynamicModal from "@/components/ui/ReactDynamicModal";
import { api, helper } from "@/services";
import React, { useEffect, useState } from "react";

export default function CheckDocumentsModal({ isOpen, onClose }) {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    if (isOpen) {
      api
        .get(`http://40.87.56.22:8001/check_drop_folder`)
        .then((res) => {
          if (!res || helper.isEmpty(res.files)) {
            return;
          }
          let _files = res.files.map((file) => {
            return {
              name: file,
              status: "pending",
            };
          });

          setFiles(_files);

          let promisses = [];
          _files.forEach((file) => {
            promisses.push(
              api.post(`http://40.87.56.22:8000/json?file_name=${file.name}`)
            );

            promisses.push(
              api.post(
                `http://40.87.56.22:8000/doc_details?file_name=${file.name}`
              )
            );
          });

          Promise.allSettled(promisses)
            .then(() => {
              let _promisses = [];
              _files.forEach((file) => {
                _promisses.push(
                  api.post(
                    `http://40.87.56.22:8001/move_to_completed/${file.name}`
                  )
                );
              });

              Promise.allSettled(_promisses)
                .then((response) => {
                  console.log("response", response);
                  response.forEach((resData, i) => {
                    _files[i].status =
                      resData.status == "rejected" ? "failed" : "success";
                  });

                  setFiles([..._files]);
                })
                .catch(() => {});
            })
            .catch(() => {});
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [isOpen]);

  return (
    <ReactDynamicModal
      title="Check Documents"
      isOpen={isOpen}
      onClose={onClose}
      additionalStyle={{
        content: {
          width: "40%",
        },
      }}
      footerContent={null}
    >
      <table class="table">
        <thead>
          <tr>
            <th>File name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {!files || helper.isEmpty(files) ? (
            <tr>
              <td colSpan={2} className="text-center border-bottom-0">
                File Not Found
              </td>
            </tr>
          ) : (
            files.map((file, i) => (
              <tr key={i}>
                <td>{file.name}</td>
                <td>
                  <span class={`ani-status ${file.status}`}></span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className="text-end">
        <ReactButton
          size="sm"
          className="globel--btn text-white-primary bg-btn-theme border-0"
          onClick={onClose}
        >
          Ok
        </ReactButton>
      </div>
    </ReactDynamicModal>
  );
}
