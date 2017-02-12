/**
 * Created by terrywang on 2017/2/12.
 */
var room_status = {
    INIT:{
        CREATE_ROOM:"WAITING",
        JOIN_ROOM:"WAITING",
        SET_TO_WAITING:"WAITING",
        SET_TO_IN_GAME:"IN_GAME",
        SET_TO_INIT:"INIT"
    },
    WAITING:{
        START_GAME:"IN_GAME",
        LEAVE_ROOM:"INIT"
    },
    IN_GAME:{
        END_GAME:"WAITING"
    }
};



module.exports = {
    room:{
        status:room_status,
        initState:"INIT"
    },
    game:{}
};

