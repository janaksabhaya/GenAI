import ReactButton from '@/components/ui/ReactButton'
import ReactDynamicModal from '@/components/ui/ReactDynamicModal'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'reactstrap';



const modalStyle = {
    content: {
        width: "70%",
        height: "700px"
    },
};

const ViewDocsModal = ({ isOpen, onClose, files }) => {
    const [jsonData, setJsonData] = useState({})

    let docs = {
        'CapCall': {
            pdf: [
                // '1552625_Stmt_20240111010709333',
                // '1554933_Stmt_20240116110708637',
                // '1556929_Stmt_20240119120243767',
                // '1560379_Stmt_20240129014238012',
                // '1562512_Stmt_20240131013751125',
                // '1562724_Stmt_20240131021650583',
                // '1564457_Stmt_20240202081417311',
                // '1564827_Stmt_20240205043328296',
                // '1567720_Stmt_20240208022007281',
                // '1567974_Stmt_20240209120824720',
                '1545328_Stmt_20231227120925858',
                '1545788_Stmt_20231227050819671',
                '1545788_Stmt_20231227050819671',
                '1547130_Stmt_20240102115046921',
                '1548299_Stmt_20240103055843655',
                '1555967_Stmt_20240118122644055',
                '1556147_Stmt_20240118020031013',
                '1560982_Stmt_20240129060254090',
                '1568277_Stmt_20240209111246157'
            ],
            json: [
                '1545328_Stmt_20231227120925858.pdf',
                '1545788_Stmt_20231227050819671.pdf',
                '1545788_Stmt_20231227050819671.pdf',
                '1547130_Stmt_20240102115046921.pdf',
                '1548299_Stmt_20240103055843655.pdf',
                '1555967_Stmt_20240118122644055.pdf',
                '1556147_Stmt_20240118020031013.pdf',
                '1560982_Stmt_20240129060254090.pdf',
                '1568277_Stmt_20240209111246157.pdf'
            ]
        },
        'Distribution': {
            pdf: [
                '1545328_Stmt_20231227120925858',
                '1545788_Stmt_20231227050819671',
                '1546522_Stmt_20231229070552011',
                '1547130_Stmt_20240102115046921',
                // '1547204_Stmt_20240102033438390',
                // '1548299_Stmt_20240103055843655',
                // '1555967_Stmt_20240118122644055',
                // '1556147_Stmt_20240118020031013',
                // '1560982_Stmt_20240129060254090',
                // '1568277_Stmt_20240209111246157',
            ],
            json: [
                '1545328_Stmt_20231227120925858.pdf',
                '1545788_Stmt_20231227050819671.pdf',
                '1546522_Stmt_20231229070552011.pdf',
                '1547130_Stmt_20240102115046921.pdf',
            ]
        },
        'Statement': {
            pdf: [
                '1568458_Stmt_20240212092201156',
                '1568480_Stmt_20240212110308940',
                '1568490_Stmt_20240212112618836',
                '1568515_Stmt_20240212115231083',
                '1568556_Stmt_20240212012607470',
                '1568560_Stmt_20240212013936447',
                // '1568465_Stmt_20240212093851937',
                // '1568474_Stmt_20240212102233652',
                // '1568549_Stmt_20240212011011795',
                // '1568553_Stmt_20240212011813343',
            ],
            json: [
                '1568458_Stmt_20240212092201156.pdf',
                '1568480_Stmt_20240212110308940.pdf',
                '1568490_Stmt_20240212112618836.pdf',
                '1568515_Stmt_20240212115231083.pdf',
                '1568556_Stmt_20240212012607470.pdf',
                '1568560_Stmt_20240212013936447.pdf',
            ]
        }
    }
    // let randomIndex = Math.floor(Math.random() * docs[docType].pdf.length);
    useEffect(() => {
        if (files) {
            import(`../../../data/Documents/Statement/${files.json}`)
                .then((res) => {
                    setJsonData(res.default)
                });
        }
    }, [files])

    return (
        <ReactDynamicModal
            title="View Docs"
            isOpen={isOpen}
            onClose={onClose}
            additionalStyle={modalStyle}
            footerContent={
                <div className="d-flex align-items-center justify-content-end gap-2">

                </div>
            }
        >
            <div className='docs-modal'>
                <Row >
                    <Col md="6">
                        {files && <object data={require(`../../../data/Documents/Statement/${files.pdf}`)} type="application/pdf" width="100%" height="100%">
                        </object>}</Col>
                    <Col md="6">
                        <pre>{JSON.stringify(jsonData, null, 2)}</pre>
                    </Col>

                </Row>


            </div>
        </ReactDynamicModal>
    )
}

export default ViewDocsModal
