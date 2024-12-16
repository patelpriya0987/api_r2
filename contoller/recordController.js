const recordModel = require('../model/recordModel');

const getAllRecords = async (req, res) => {
    try {
        const records = await recordModel.find();
        console.log("records", records);
        
        res.status(200).json(records);
    } catch (error) {
        console.log("error", error);
        
        res.status(500).json({ message: error.message });
    }
};

const getRecordById = async (req, res) => {
    try {
        const record = await recordModel.findById(req.params.id);    
        res.status(200).json(record);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createRecord = async (req, res) => {
    try {
        const { name, email, phone, image, status } = req.body;
        const data = await recordModel( {
            name,
            email,
            phone,
            image,
            status,
            created_date: new Date(),
        });
        await data.save();
        console.log("data", data);
        
        res.status(200).json(data);
        }catch (error) {
        console.log("error", error);
        
        res.status(500).json({ message: error.message });
    }
};

const updateRecord = async (req, res) => {
    try {
        const { name, email, phone, image, status } = req.body;
        const data = await recordModel.findOneAndUpdate({_id : req.params.id}, ( {
            name,
            email,
            phone,
            image,
            status,
            updated_date: new Date(),
        }));

        res.status(200).json({ message: 'Record updated successfully', data });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteRecord = async (req, res) => {
    try {
        const record = await recordModel.findByIdAndDelete(req.params.id);
        res.status(200).json(record);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllRecords,    
    getRecordById,
    createRecord,
    updateRecord,
    deleteRecord
};