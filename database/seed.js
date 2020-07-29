require('./index');
const mongoose = require('mongoose');
const { Owner, Car } = require('../server/models');

async function seedOwners() {
  console.log('Seeding owners to ' + mongoose.connection.name + '...');
  const owners = [
    { name: 'Nikita Kilikhevych', bio: 'Rails/Node Engineer' },
    { name: 'James King', bio: 'Senior Engineer (Node)' },
    { name: 'Serghii Blazhko', bio: 'Backend Engineer(Ruby on Rails) + Node' },
    { name: 'Alvaro Chalar', bio: 'Software Engineer (ROR & Node)' }
  ];

  for (owner of owners) {
    var newOwner = new Owner(owner);
    await newOwner.save();
  }

  const allOwners = await Owner.find();
  console.log('Created Owners: ', allOwners);
}

async function seedCars() {
  console.log('Seeding cars to ' + mongoose.connection.name + '...');

  const ownerNikita = await Owner.findOne({ name: 'Nikita Kilikhevych' });
  const ownerJames = await Owner.findOne({ name: 'James King' });

  let carMazda = new Car({ model: 'Mazda CX5', registration_number: "EF4913", owner: ownerNikita._id });
  let carBmw = new Car({ model: 'BMW X6M Competition', registration_number: "ML4745", owner: ownerJames._id });

  await carMazda.save();
  await carBmw.save();

  ownerNikita.cars.push(carMazda);
  ownerJames.cars.push(carBmw);

  await ownerNikita.save();
  await ownerJames.save();
}

seedOwners();
seedCars();