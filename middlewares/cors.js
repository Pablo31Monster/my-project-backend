const whitelist = [
    'http://localhost',
    'http://localhost:3000',
    'http://localhost:4200',
];

const corsOptions = {
    origin: function(origin, callback) {
        if(whitelist.indexOf(origin) !== -1 || !origin){
            callback(null, true);
        }else {
            callback(new Error("Not allowed by CORS"))
        }
    },
    credentials: true,
}

export default corsOptions;