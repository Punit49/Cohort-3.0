const fileController = async (req, res) => {
    try {
        console.log("file - ", req.file);
        if(!req.file){
            console.log(101)
            return res.status(400).json({
                message: "File not provided"
            })
        }
        return res.status(200).json({
            message: "Done Bro"
        })         
    } catch (error) {
        console.error(error.message);
    }
}

module.exports = {
    fileController
}