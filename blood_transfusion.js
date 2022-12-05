// A can only give to have A
// B can only give to have B
// Rh can only give to have Rh
// O- can give to everyone

// inital code
// if donor = A and receiver != A or O-, print NO
// if donor = B and receiver != B or O-, print NO
// if donor = Rh and receiver != Rh or O-, print NO
// if donor = O-, print YES

// reverse engineer the situation (find the incompatible situations)
// if the last part of giver string is + and receiver is -, then incompatible
// if first letter of giver is O and first of receiver is not O, then incompatible
// if first letter of giver is A and first letter of receiver is B, then incompatible
// if first letter of giver is A and first letter of receiver is not B,
// and second letter of receiver is not B, then incomptaible
// if first letter of giver is A and first letter of receiver is not B,
// and first letter of giver is A and second letter of giver is B, then incompatible



function blood_transfusion(giver, recevier) {

    if (giver[giver.length - 1] == "+" && receiver[receiver.length - 1] == "-"){
        return false;
    }

    else if (giver[0] != "O" && receiver[0] == "O"){
        return false;
    }

    else if (giver[0] == "A" && receiver[0] == "B"){
        return false;
    }

    else if (giver[0] == "A" && receiver[0] != "B" && receiver[1] != "B"){
        return false;
    }

    else if (giver[0] == "A" && receiver[0] != "B" && giver[0] == "A" && giver[1] == "B"){
        return false;
    } 
}

console.log(blood_transfusion("O+", "A+"))