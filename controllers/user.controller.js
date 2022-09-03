import userData from "../public/users.json" assert {type: "json"};


export const getRandomUser = (req, res) => {
    const totalUser = userData.map(item => item);

    const userNumber = totalUser.length;

    const random = Math.ceil(Math.random() * userNumber);

    const result = userData.filter(item => item.id === random);

    res.send(result);
};

export const getAllUser = (req, res) => {
    const result = userData.map(item => item)
    res.send(result);
};

export const getSingleUser = (req, res) => {
    const { id } = req.params;

    const oldUser = userData.find(item => item.id === Number(id));

    if (oldUser) {
        const result = userData.find(item => item.id === Number(id));
        res.json(result);
    } else {
        res.status(404).json({ message: "User not found!" });
    }

};

export const addNewUser = (req, res) => {
    const newUser = req.body;
    userData.push(newUser);
    res.json(userData)
};

export const updateSingleUser = (req, res) => {
    const { id } = req.params;
    const { gender, name, contact, address, photoUrl } = req.body;

    const oldUser = userData.find(item => item.id === Number(id));

    if (oldUser) {
        const updateResult = userData.find(item => item.id === Number(id));

        updateResult.id = Number(id);
        updateResult.gender = gender;
        updateResult.name = name;
        updateResult.contact = contact;
        updateResult.address = address;
        updateResult.photoUrl = photoUrl;

        console.log(updateResult);
        res.json(updateResult);

    } else {
        res.status(404).json({ message: "User not found!" });
    }

};

export const updateMultipleUser = (req, res) => {
    const { body } = req;

    for (const userDoc of body) {
        if (userDoc.id) {
            const updateResult = userData.find(item => item.id === Number(userDoc?.id));

            updateResult.id = Number(userDoc?.id);
            updateResult.gender = userDoc.gender;
            updateResult.name = userDoc.name;
            updateResult.contact = userDoc.contact;
            updateResult.address = userDoc.address;
            updateResult.photoUrl = userDoc.photoUrl;


            console.log(updateResult);
            res.json(updateResult);
        }
    }
};

export const deleteSingleUser = (req, res) => {
    const { id } = req.params;

    const oldUser = userData.find(item => item.id === Number(id));

    if (oldUser) {
        const newUserData = userData.filter(item => item.id !== Number(id));

        res.json(newUserData);

    } else {
        res.status(404).json({ message: "User not found!" });
    }

}