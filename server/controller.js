module.exports = {
    getHouses: async (req, res) => {
        const db = req.app.get('db')
        const houses = await db.get_houses()
        return res.status(200).send(houses)
    }
}