import * as React from "react"
import {
    Viewer,
    Worker
} from "@react-pdf-viewer/core"
import {
    searchPlugin
} from "@react-pdf-viewer/search"
import { propertiesPlugin } from '@react-pdf-viewer/properties';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import "@react-pdf-viewer/core/lib/styles/index.css"
import "@react-pdf-viewer/search/lib/styles/index.css"
import '@react-pdf-viewer/properties/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const PDFViewer = ({ fileUrl, searchText = "" }) => {
    const propertiesPluginInstance = propertiesPlugin();
    const searchPluginInstance = searchPlugin();
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    const { Search } = searchPluginInstance

    return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <div
                className="rpv-core__viewer"
                style={{
                    border: "1px solid rgba(0, 0, 0, 0.3)",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%"
                }}
            >
                <Search>
                    {renderSearchProps => (
                        <div>
                            <AddSearch search={searchText} renderSearchProps={renderSearchProps} />
                        </div>
                    )}
                </Search>
                <div
                    style={{
                        flex: 1,
                        overflow: "hidden"
                    }}
                >
                    <Viewer fileUrl={fileUrl} plugins={[searchPluginInstance, defaultLayoutPluginInstance, propertiesPluginInstance]} theme={{ 
                        theme: "dark"
                     }} />
                </div>
            </div>
        </Worker>
    )
}

const AddSearch = ({ search, renderSearchProps }) => {
    const [searckKeyword, setSearchKeyword] = React.useState("");

    React.useEffect(() => {
        renderSearchProps.setKeyword(search);
        setSearchKeyword(search);
    }, [search])

    React.useEffect(() => {
        renderSearchProps.search();
        setTimeout(() => {
            if (document.querySelector('[title="'+search+'"]')) {
                window.scrollTo(0, document.querySelector('[title="'+search+'"]').offsetTop);
            }
        }, 100);
    }, [searckKeyword])
    
    return <></>
}

export default PDFViewer
