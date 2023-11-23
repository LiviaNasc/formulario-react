import React from 'react';

function AboutPage() {
  return (
    <div className='bg-gradient-to-b from-cyan-500 to-blue-500 text-black min-h-screen'>
      <main className='h-screen flex items-center justify-center'>
        <div className='bg-white flex flex-col rounded-lg w-1/2 font-latoRegular overflow-hidden p-8'>
          <div>
            <h1 className='text-3xl font-latoBold'>Sobre Nossa Plataforma:</h1>
            <p className='text-lg text-gray-500 mt-4'>
              Esse é o nosso formulário simulando um questionário sobre uma plataforma de jogos! Somos uma dupla de estudantes apaixonados por tecnologia e aprendizado que está desenvolvendo este sistema como parte de um projeto na faculdade.
            </p>
          </div>
          <div id="contact-links" className="mt-8">
            <h2 className="text-xl font-latoBold mb-2">Contatos dos Colaboradores:</h2>
            <div className="student-contact">
              <a href="https://github.com/johndriguess" id="profile-link" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-purple-600">
                Github - John
              </a>
            </div>
            <div className="student-contact mt-2">
              <a href="https://github.com/LiviaNasc" id="profile-link-2" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-green-600">
                Github - Lívia
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AboutPage;
