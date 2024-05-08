import React, { useMemo, useState } from 'react'
import ThemeTable from "@/components/ui/Tables/ThemeTable";
import { Card, Col, Container, Row } from "react-bootstrap";
import PageHeader from "@/components/common/PageHeader";
import Nav from 'react-bootstrap/Nav';
import useMainState from '@/hooks/useMainState';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Icon } from '@iconify/react';
import Dropdowns from '@/components/ui/Dropdowns';
import Swal from 'sweetalert2';

export default function DocumentsPage() {
    const [state, changeState] = useMainState({
        activeTab: "captured-documents",
        columns: [
            {
                accessor: "FileName",
                Header: "File name",
            },
            {
                accessor: "FileType",
                Header: "File Type",
            },
            {
                accessor: "ProcessStatus",
                Header: "Process Status",
            },
            {
                accessor: "FundName",
                Header: "Fund name",
            },
            {
                accessor: "AccountType",
                Header: "Account Type",
            },
            {
                accessor: "ReceivedDate",
                Header: "Received date",
            },
            {
                accessor: "EffectiveDate",
                Header: "Effective date",
            },
            {
                accessor: "action",
                Header: "Action",
            },
            {
                accessor: "genai_score",
                Header: "GenAI Score",
            },
        ],
        data: [
            {
                "FileName": "file1.txt",
                "FileType": "text",
                "FundName": "Fund Alpha",
                "AccountType": "Type A",
                "ReceivedDate": "2024-05-06",
                "EffectiveDate": "2024-05-10",
                "ProcessStatus": "In-progress",
            },
            {
                "FileName": "file2.docx",
                "FileType": "document",
                "FundName": "Fund Beta",
                "AccountType": "Type B",
                "ReceivedDate": "2024-05-07",
                "EffectiveDate": "2024-05-11",
                "ProcessStatus": "Processed",
            },
            {
                "FileName": "file3.xlsx",
                "FileType": "spreadsheet",
                "FundName": "Fund Gamma",
                "AccountType": "Type C",
                "ReceivedDate": "2024-05-08",
                "EffectiveDate": "2024-05-12",
                "ProcessStatus": "In-progress",
            },
            {
                "FileName": "file4.jpg",
                "FileType": "image",
                "FundName": "Fund Delta",
                "AccountType": "Type D",
                "ReceivedDate": "2024-05-09",
                "EffectiveDate": "2024-05-13",
                "ProcessStatus": "Pending",
            },
            {
                "FileName": "file5.pdf",
                "FileType": "pdf",
                "FundName": "Fund Epsilon",
                "AccountType": "Type E",
                "ReceivedDate": "2024-05-10",
                "EffectiveDate": "2024-05-14",
                "ProcessStatus": "Processed",
            },
            {
                "FileName": "file6.txt",
                "FileType": "text",
                "FundName": "Fund Zeta",
                "AccountType": "Type Z",
                "ReceivedDate": "2024-05-11",
                "EffectiveDate": "2024-05-15",
                "ProcessStatus": "Pending",
            },
            {
                "FileName": "file7.docx",
                "FileType": "document",
                "FundName": "Fund Eta",
                "AccountType": "Type H",
                "ReceivedDate": "2024-05-12",
                "EffectiveDate": "2024-05-16",
                "ProcessStatus": "Processed",
            },
            {
                "FileName": "file8.xlsx",
                "FileType": "spreadsheet",
                "FundName": "Fund Theta",
                "AccountType": "Type T",
                "ReceivedDate": "2024-05-13",
                "EffectiveDate": "2024-05-17",
                "ProcessStatus": "Pending",
            },
            {
                "FileName": "file9.jpg",
                "FileType": "image",
                "FundName": "Fund Iota",
                "AccountType": "Type I",
                "ReceivedDate": "2024-05-14",
                "EffectiveDate": "2024-05-18",
                "ProcessStatus": "Processed",
            },
            {
                "FileName": "file10.pdf",
                "FileType": "pdf",
                "FundName": "Fund Kappa",
                "AccountType": "Type K",
                "ReceivedDate": "2024-05-15",
                "EffectiveDate": "2024-05-19",
                "ProcessStatus": "Pending",
            }
        ],
        selectedAction: ""
    })

    const changeTab = (changedTab) => {
        changeState({ activeTab: changedTab })
    }

    const columns = useMemo(() => {
        let _columns = [...state.columns]

        if (state.activeTab == "ignored-documents") {
            _columns = _columns.filter(e => e.accessor != 'genai_score');
        }

        return _columns.map((column) => {
            if (column.accessor == 'action') {
                column.Cell = () => {
                    return (
                        <Dropdowns
                            active={state.selectedAction}
                            onChange={(value) => {
                                changeState({
                                    selectedAction: value
                                })
                            }}
                            data={[
                                {
                                    label: "View Doc",
                                    value: "view_doc",
                                },
                                {
                                    label: "View Extracted Data",
                                    value: "view_extract_data",
                                },
                                {
                                    label: "View .json (Delivery file)",
                                    value: "view_json",
                                },
                            ]}>
                            <Icon icon="bi:three-dots-vertical" width={20} />
                        </Dropdowns>
                    )
                }
            } else if (column.accessor == 'genai_score') {
                column.Cell = () => {
                    return (
                        <Dropdowns
                            active={state.selectedGenAIScore}
                            onChange={(value) => {
                                if (value == 'allow_user_feedback') {
                                    onUserFeedback(value)
                                }

                                changeState({
                                    selectedGenAIScore: value
                                })
                            }}
                            data={[
                                {
                                    label: "Allow user feedback?",
                                    value: "allow_user_feedback",
                                },
                                {
                                    label: "Retrain?",
                                    value: "retrain",
                                },
                            ]}>
                            <Icon icon="bi:three-dots-vertical" width={20} />
                        </Dropdowns>
                    )
                }
            }

            return column;
        })
    }, [state.activeTab, state.selectedAction, state.selectedGenAIScore])

    const onUserFeedback = (value) => {
        Swal.fire({
            title: "Allow user feedback?",
            icon: "info",
            showCancelButton: true,
            confirmButtonText: "Yes",
            cancelButtonText: "No",
            confirmButtonColor: "#4bc3ff",
        }).then((result) => {
            if (result.isConfirmed) {

            }
        });
    }

    return (
        <div className="documents-page">
            <PageHeader title="Documents" />
            <Container fluid>
                <Card className="">
                    <Card.Body as="div">
                        <Nav fill variant="tabs" className="documents--tabs gap-2" defaultActiveKey={state.activeTab}>
                            <Nav.Item onClick={() => changeTab("captured-documents")}>
                                <Nav.Link eventKey="captured-documents" className="font-14 text-capitalize">Captured for ingestion documents</Nav.Link>
                            </Nav.Item>
                            <Nav.Item onClick={() => changeTab("ignored-documents")}>
                                <Nav.Link eventKey="ignored-documents" className="font-14 text-capitalize">Ignored for ingestion documents</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <div className="mt-4">
                            <ThemeTable columns={columns} data={state.data} />
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}
