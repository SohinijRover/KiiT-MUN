const welcome = async (req, res) => {
    
    res
    .status(200)
    .send({
        success: true,
        message: "Welcome To KIIT MUN 2023"
    })
}

module.exports = welcome;