module.exports = {
    getHouses: async (req, res) => {
        const db = req.app.get('db')
        const houses = await db.get_houses()
        return res.status(200).send(houses)
    },
    makeHouse: (req, res) => {
        const {name, address, city, state, zipcode, houseImg, mortgage, rent} = req.body
        const db = req.app.get('db')
        db.post_house([name, address, city, state, zipcode, houseImg, mortgage, rent])
        .then(() => {
            res.sendStatus(200);
        })
    },
    deleteHouse: (req, res) => {
        const {id} = req.params;
        const db = req.app.get('db');
        db.delete_house([id])
        .then( () => {
            res.sendStatus(200)
        })
    }
}