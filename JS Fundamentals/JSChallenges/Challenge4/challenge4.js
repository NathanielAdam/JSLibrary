let position = prompt("What is your position?", "cook"),
    amountOfWork = prompt("How much did you work?", "little"),
    rate,
    hoursWorked;
//

switch (amountOfWork) {
    case 'none':
        hoursWorked = 0;
        break;

    case 'little':
        hoursWorked = 10;
        break;

    case 'part-time':
        hoursWorked = 20;
        break;

    case 'medium':
        hoursWorked = 30;
        break;

    case 'full-time':
        hoursWorked = 40;
        break;

    case 'insane':
        hoursWorked = 50;
        break;

}

switch (position.toLowerCase()) {
    case "cashier":
        rate = 8
        break

    case "cook":
        rate = 10
        break

    case "manager":
        rate = 14
        break

    case "owner":
        rate = 50
        break

    default:
        rate = 0
        break
}
alert(`I am the ${position} and get paid $${rate}/hr. I worked ${hoursWorked}. I work ${hoursWorked} so I get paid  \$${rate * hoursWorked}`)