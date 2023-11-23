import React from 'react';

function NotFoundPage() {
  return (
    <div className='bg-gradient-to-b from-cyan-500 to-blue-500 text-black min-h-screen'>
     <main className='h-screen flex items-center justify-center'>
      <div className='bg-white flex rounded-lg w-1/2 font-latoRegular overflow-hidden'>
        <div className='flex-1 text-gray-700 p-20'>
          <h1 className='text-3xl pb-2 font-latoBold'>Ops! Página não encontrada...😥</h1>
          <p className='text-lg text-gray-500'>Verifique o link na barra de pesquisa.</p>
        </div>
       </div>
      </main>
  </div>
  );
}

export default NotFoundPage;
