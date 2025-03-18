import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Table = ({ data }) => {
  const [sortedField, setSortedField] = useState(null);
  const [ascending, setAscending] = useState(true);

  const handleSort = (field) => {
    if (sortedField === field) {
      setAscending(!ascending); 
    } else {
      setSortedField(field); 
      setAscending(true);
    }
  };

  const sortedData = sortedField
    ? [...data].sort((a, b) => (a[sortedField] > b[sortedField] ? 1 : -1) * (ascending ? 1 : -1))
    : data;

  return (
    <table className="table table-striped">
      <thead>

        <tr>
          {Object.keys(data[0]).map((key) => (
          <th key={key} onClick={() => handleSort(key)} style={{ cursor: 'pointer' }}>
          {key} {sortedField === key ? (ascending ? '🔼' : '🔽') : ''}
          </th>
         ))}
        </tr>

      </thead>

      <tbody>
        {sortedData.map((item) => (
          <tr key={item.id}>
            {Object.values(item).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>

    </table>
  );
};

const App = () => {
  const list = [
    { id: 1, firstName: 'Harry', lastName: 'Potter', jobTitle: 'Wizard', email: 'h_potter@gmail.com' },
    { id: 2, firstName: 'Ron', lastName: 'Weasley', jobTitle: 'Wizard', email: 'ron_weasley69@gmail.com' },
    { id: 3, firstName: 'Tom ', lastName: 'Marvolo-Riddle', jobTitle: 'Evil man', email: 'marvolo1942@mail.com' },
    { id: 4, firstName: 'Draco', lastName: 'Malfoy', jobTitle: 'Chef', email: 'dracon.malfoy@hot.com' },
    { id: 5, firstName: 'Hermione', lastName: 'Granger', jobTitle: 'Team leader', email: 'hermione_granger@mail.com' },
    { id: 6, firstName: 'Neville', lastName: 'Longbottom', jobTitle: 'Potions master', email: 'neville.longb@gmail.com' },
  ];

  return (
  <div style={{ height: '100vh', display: 'flex' }}>
    <div style={{ marginLeft: '450px' }}> 
      <h2 style={{ textAlign: 'center'}}>Table Just for fun</h2>
      <Table data={list} />
    </div>
  </div>
);
};

export default App;