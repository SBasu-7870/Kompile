import React from 'react';

const Table = (props) => {
    const obj = props.obj;

    return (
      <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className='text-xs text-gray-900 uppercase dark:text-gray-400'>
        <tr>
          {Object.keys(obj).map((key, index) => (
            <th className="px-6 py-3" key={index} scope="col" >{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {obj[Object.keys(obj)[0]].map((value, index) => (
          <tr className='bg-white dark:bg-gray-800' key={index}>
            {Object.keys(obj).map((key, i) => (
              <td className='text-gray-800 px-6 py-4' key={i}>{obj[key][index]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    );
};

export default Table