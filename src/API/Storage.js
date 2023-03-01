export default function Storage(type,param,value){
    if (type == 'w'){
        if (param == 'all'){
            StorageID('w',value[0]);
            StorageName('w',value[1]);
            StorageAge('w',value[2]);
            StoragePhoneNumber('w', value[3]);
            StoragePassword('w', value[4]);
            StoragePhoto('w', value[5]);
            StorageTeam('w', value[6]);
        }
        if (param == 'id'){
            StorageID('w',value)
        }
        if (param == 'name'){
            StorageName('w',value)
        }
        if (param == 'age'){
            StorageAge('w',value)
        }
        if (param == 'phoneNumber'){
            StoragePhoneNumber('w', value)
        }
        if (param == 'password'){
            StoragePassword('w', value)
        }
        if (param == 'photo'){
            StoragePhoto('w',value);
        }
        if (param == 'team'){
            StorageTeam('w',value);
        }
        if (param == 'OnloadUserid'){
            StorageOnloadUserID('w',value)
        }
        if (param == 'OnloadUsername'){
            StorageOnloadUsername('w',value)
        }
        if (param == 'OnloadUserage'){
            StorageOnloadUserAge('w',value)
        }
        if (param == 'OnloadUserphoto'){
            StorageOnloadUserPhoto('w',value);
        }

    }
    else if (type == 'r'){
        if (param == 'id'){
            return StorageID('r', 0)
        }
        if (param == 'name'){
            return StorageName('r', 0)
        }
        if (param == 'age'){
            return StorageAge('r', 0)
        }
        if (param == 'phoneNumber'){
            return StoragePhoneNumber('r',0)
        }
        if (param == 'password'){
            return StoragePassword('r',0)
        }
        if (param == 'photo'){
            return StoragePhoto('r',0);
        }
        if (param == 'team'){
            return StorageTeam('r',0);
        }
        if (param == 'OnloadUserid'){
            return StorageOnloadUserID('r', 0)
        }
        if (param == 'OnloadUsername'){
            return StorageOnloadUsername('r',0)
        }
        if (param == 'OnloadUserage'){
            return StorageOnloadUserAge('r', 0)
        }
        if (param == 'OnloadUserphoto'){
            return StorageOnloadUserPhoto('r', 0);
        }
        if (param == 'all'){
            console.log(StorageID('r',0),StorageName('r',0),StorageAge('r',0), StoragePhoneNumber('r',0),StoragePassword('r',0),StoragePhoto('r',0))
        }
        
    }
    

}

function StorageID(type,id){
    if (type == 'r'){
        return indent;
    }
    else if (type == 'w'){
        indent = id;
        return -1;
    }
};
function StorageOnloadUserID(type,onloadUserID){
    if (type == 'r'){
        return ident;
    }
    else if (type == 'w'){
        ident = onloadUserID;
        return -1;
    }
};
function StorageName(type,name){

    if (type == 'r'){
        return userName;
    }
    else if (type == 'w'){
        userName = name;
        return -1;
    }
};
function StorageOnloadUsername(type,peopleName){

    if (type == 'r'){
        return checkName;
    }
    else if (type == 'w'){
        checkName = peopleName;
        return -1;
    }
};
function StorageAge(type,age){

    if (type == 'r'){
        return userAge;
    }
    else if (type == 'w'){
        userAge = age;
        return -1;
    }
};
function StoragePhoneNumber(type,phoneNumber){

    if (type == 'r'){
        return userNumber;
    }
    else if (type == 'w'){
        userNumber = phoneNumber;
        return -1;
    }
};
function StoragePassword(type,password){

    if (type == 'r'){
        return userPass;
    }
    else if (type == 'w'){
        userPass = password;
        return -1;
    }
};
function StoragePhoto(type,userPhoto){

    if (type == 'r'){
        return photoUser;
    }
    else if (type == 'w'){
        photoUser = userPhoto;
        return -1;
    }
};
function StorageTeam(type,userTeam){

    if (type == 'r'){
        return teamUser;
    }
    else if (type == 'w'){
        teamUser = userTeam;
        return -1;
    }
};
function StorageOnloadUserAge(type,OnloadUserage){

    if (type == 'r'){
        return qwer;
    }
    else if (type == 'w'){
        qwer = OnloadUserage;
        return -1;
    }
};
function StorageOnloadUserPhoto(type,OnloadUseruserPhoto){

    if (type == 'r'){
        return qwert;
    }
    else if (type == 'w'){
        qwert = OnloadUseruserPhoto;
        return -1;
    }
};