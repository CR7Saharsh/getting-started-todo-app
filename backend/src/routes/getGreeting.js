const GREETING = 'Bhaad main jaao world';

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING,
    });
};
