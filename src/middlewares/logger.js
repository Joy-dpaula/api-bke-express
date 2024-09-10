const logger = (req, res, next) => {
    console.log( `${req.method}  ${req.hostname} ${req.ip} ${req.url} ${req.originalUrl}` )
    next()
}

export default logger