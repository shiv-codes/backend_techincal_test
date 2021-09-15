require('dotenv').config();
const fs = require('fs');
const env = process.env

const configureENV = () => {
    const envErr = [];
    fs.readFile('.env.sample', (err, data) => {
        if (err) {
            console.error("Unable to load .env.sample file.", err)
            process.exit(1)
        }
        var sampleData = data.toString().split('\n')
        sampleData.forEach(element => {
            var ele = element.trim()
            if (!env.hasOwnProperty(ele)) {
                envErr.push(ele)
            }
        })

        if (envErr.length != 0) {
            console.log("Please configure these env variables: ", envErr)
            process.exit(1)
        }
        console.log('ENV variables verified successfully');
        return
    });
}

module.exports = { configureENV }

