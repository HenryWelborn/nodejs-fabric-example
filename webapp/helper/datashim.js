const data = {
  "cars": [{
    "color":"blue",
    "make": "Toyota",
    "model": "Prius",
    "owner": "Tomoko",
    "id": 1571682634946
  },
  {
    "color":"red",
    "make": "Ford",
    "model": "Mustang",
    "owner": "Brad",
    "id": 1571682634947
  },
            {
                color: 'green',
                make: 'Hyundai',
                model: 'Tucson',
                owner: 'Jin Soo',
                "id": 1571682634948
            },
            {
                color: 'yellow',
                make: 'Volkswagen',
                model: 'Passat',
                owner: 'Max',
                "id": 1571682634949
            },
            {
                color: 'black',
                make: 'Tesla',
                model: 'S',
                owner: 'Adriana',
                "id": 1571682634950
            },
            {
                color: 'purple',
                make: 'Peugeot',
                model: '205',
                owner: 'Michel',
                "id": 1571682634951
            },
            {
                color: 'white',
                make: 'Chery',
                model: 'S22L',
                owner: 'Aarav',
                "id": 1571682634952
            },
            {
                color: 'violet',
                make: 'Fiat',
                model: 'Punto',
                owner: 'Pari',
                "id": 1571682634953
            },
            {
                color: 'indigo',
                make: 'Tata',
                model: 'Nano',
                owner: 'Valeria',
                "id": 1571682634954
            },
            {
                color: 'brown',
                make: 'Holden',
                model: 'Barina',
                owner: 'Shotaro',
                "id": 1571682634955
}
]
}

function findAll() {
  return data;
}

function findItem(id) {
  for(let item of data.cars){
    if (item.id == id) return item;
  }
  return false;
}

const findID=function(cars,id) {
  return data.cars.indexOf(findItem(id))
}

function deleteItem(id) {
  let item = findItem(id)
  if (false != item)
  {
    let index = findID(data.cars,id);
    data.cars.splice(index,1);
    return item;
  }

  return false;
}

function saveItem(user) {
  let id = Math.floor(Date.now());
  user['id'] = id;
  data.cars.push(user);
  console.log(data.cars)
  return id;
}

function updateItem(user,id) {
  let index = findID(data.cars,id);

  if (false != index) {
    user.id = parseInt(id,10);
    data.cars[index]=user;
    return id;
  }

  return false;
}

exports.findAll = findAll;
exports.findItem = findItem;
exports.deleteItem = deleteItem;
exports.saveItem = saveItem;
exports.updateItem = updateItem;
