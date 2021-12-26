import {Launch_Vehicle, Space_Capsule, Spaceport, Launch_Vehicle_Portrait, Space_Capsule_Portrait, Spaceport_Portrait} from '../../assets/exportTechnology';

const vehicleDetails = {
    img_landscape: Launch_Vehicle,
    img_portrait: Launch_Vehicle_Portrait,
    name: 'LAUNCH VEHICLE',
    description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
}

const capsuleDetails = {
    img_landscape: Space_Capsule,
    img_portrait: Space_Capsule_Portrait,
    name: 'SPACE CAPSULE',
    description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
}

const portDetails = {
    img_landscape: Spaceport,
    img_portrait: Spaceport_Portrait,
    name: 'SPACE PORT',
    description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
}

export {vehicleDetails, capsuleDetails, portDetails};