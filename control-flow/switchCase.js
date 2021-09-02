let role = 'guest';

switch (role){
    case 'guest':
        console.log('Guest User');
        break;

    case 'moderator':
        console.log('Moderator Guest');
        break;

    default:
        console.log('Unknow User');
}

//compare to "if else" -> better
if (role === 'guest' && hour > 12) console.log('Guest User');
else if (role === 'moderator') console.log(Moderator);
else console.log('Unknow user');