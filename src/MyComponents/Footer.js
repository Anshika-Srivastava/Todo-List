import React from 'react'

export const Footer = () => {
    let footerStyle = {
        padding: "5px 0"
    }
    return (
        <footer className="bg-dark text-light" style={footerStyle}>
            <p className="text-center">
            Copyright &copy; anshikasriv.co
            </p>
        </footer>
    )
}
