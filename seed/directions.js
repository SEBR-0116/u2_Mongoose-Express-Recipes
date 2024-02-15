const db = require('../db')
const  Direction = require('../models.direction')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const directions = { 
        lasagDir: [ 
            { step: 1, Action: 'chop' },
            { step: 2, Action: 'chop' },
            { step: 3, Action: 'chop' },
            { step: 4, Action: 'chop' },
            { step: 5, Action: 'chop' },
            { step: 6, Action: 'chop' },
        ],
        chiliDir: [
            { step: 1, Action: 'chop' },
            { step: 2, Action: 'chop' },
            { step: 3, Action: 'chop' },
            { step: 4, Action: 'chop' },
        ]}
    
    const lasagDirFlat = directions.lasagDir
    const chiliDirFlat = directions.chiliDir
    await Direction.insertMany((lasagDirFlat))
    await Direction.insertMany((chiliDirFlat))
    console.log("Defined Direction")
}
const run = async () => {
    await main()
    db.close()
}

run()