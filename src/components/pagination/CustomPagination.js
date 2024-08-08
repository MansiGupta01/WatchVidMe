import React from 'react'
import { Pagination, ThemeProvider, createTheme } from '@mui/material'
function CustomPagination({ setPage, numOfPages = 10 }) {
    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0);
    };

    const darkTheme = createTheme({
        palette: {
            mode: "dark",
        },
    })
    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: "20px"
            }}>
            <ThemeProvider theme={darkTheme}>
                <Pagination
                    count={numOfPages}
                    onChange={(e) => handlePageChange(e.target.textContent)}
                    color='primary'
                    hideNextButton
                    hidePrevButton
                />
            </ThemeProvider>
        </div>
    )
}

export default CustomPagination
