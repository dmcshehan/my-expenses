const combineObjectsAndReturn = (oldObject, newPiece) =>{
    return {
        ...oldObject,
        ...newPiece
    }
}

export default combineObjectsAndReturn;