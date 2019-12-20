function myGetTime(timestamp){
    const oldDate = new Date(timestamp);
    const newDateTimestamp = new Date().getTime();
    const dif = newDateTimestamp - timestamp;
    if ( dif < 60000 ){
        return `${ Math.floor(dif / 1000) }秒前`;
    } else if( dif < 3600000 ){
        return `${ Math.floor(dif / 60000) }分钟前`;
    } else if ( dif < 86400000 ){
        return `${ Math.floor(dif / 3600000) }小时${ Math.floor(dif % 3600000 / 60000) }分钟前`;
    } else{
        return `${oldDate.getUTCFullYear()}-${oldDate.getUTCMonth()}-${oldDate.getUTCDate()}`;
    }
}

export default myGetTime;