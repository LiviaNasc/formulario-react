import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string().email('E-mail inválido').required('O e-mail é obrigatório'),
  age: Yup.number().typeError('A idade deve ser um número').required('A idade é obrigatória'),
  occupation: Yup.string().required('A ocupação é obrigatória'),
  recommendation: Yup.string().required('Por favor, escolha uma opção de recomendação'),
  genres: Yup.array().min(1, 'Selecione pelo menos um gênero').required('Pelo menos um gênero é obrigatório'),
  comments: Yup.string(),
});

const initialValues = {
  name: '',
  email: '',
  age: '',
  occupation: '',
  recommendation: '',
  genres: [],
  comments: '',
};

const onSubmit = (values) => {
  console.log('Valores do formulário:', values);
};



function FormPage() {
  return (

    <div className='bg-gradient-to-b from-cyan-500 to-blue-500 pt-20 pb-10'>
      <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      <Form id="survey-form" className="bg-gradient-to-b from-teal-800 to-teal-600 p-10 rounded-10 w-3/5 mx-auto border-2 border-teal-800 br-10">
        <fieldset>
          <label className="block mt-2 text-white">
            Nome: <Field type="text" id="name" name="name" placeholder="Nome" className='w-full border-1 border-white rounded-5 bg-opacity-10 text-black' />
            <ErrorMessage name="name" component="div" className="error" />
          </label>
          <label className="block mt-2 text-white">
            Email: <Field type="email" id="email" name="email" placeholder="E-mail" className='w-full border-1 border-blue rounded-5 text-black'/>
            <ErrorMessage name="email" component="div" className="error" />
          </label>
          <label className="block mt-2 text-white">
            Idade: <Field type="number" id="age" name="age" placeholder="Idade" className='w-full border-1 border-white rounded-5 bg-opacity-10 text-black'/>
            <ErrorMessage name="age" component="div" className="error" />
          </label>
          <label className="block mt-2 text-white">
            Qual sua principal ocupação? 
            <Field as="select" id="occupation" name="occupation" className='w-full border-1 border-white rounded-5 bg-opacity-10 text-black'>
              <option value="">(Escolha um)</option>
              <option value="cursando_ensino_fundamental">Cursando ensino fundamental</option>
              <option value="cursando_ensino_medio">Cursando ensino médio</option>
              <option value="cursando_ensino_superior">Cursando ensino superior</option>
              <option value="trabalho_tempo_integral">Trabalho em tempo integral</option>
              <option value="estagio">Estágio</option>
              <option value="outro">Outro</option>
            </Field>
            <ErrorMessage name="occupation" component="div" className="error" />
          </label>
          <label className="block mt-2 text-white">
            Você recomendaria nossa plataforma para um amigo?
            <div>
              <Field type="radio" name="recommendation" value="recommend" id="recommend" />
              <label htmlFor="recommend">Recomendaria</label>
            </div>
            <div>
              <Field type="radio" name="recommendation" value="not-recommend" id="not-recommend" />
              <label htmlFor="not-recommend">Não recomendaria</label>
            </div>
            <div>
              <Field type="radio" name="recommendation" value="not-know" id="not-know" />
              <label htmlFor="not-know">Não tenho certeza</label>
            </div>
            <ErrorMessage name="recommendation" component="div" className="error" />
          </label>
          <label className="block mt-2 text-white">
            Quais seus gêneros de jogos favoritos?
            <div>
              <Field type="checkbox" name="genres" value="FPS" id="fps" />
              <label htmlFor="fps">FPS</label>
            </div>
            <div>
              <Field type="checkbox" name="genres" value="RPG" id="rpg" />
              <label htmlFor="rpg">RPG</label>
            </div>
            <div>
              <Field type="checkbox" name="genres" value="Simulação" id="simulation" />
              <label htmlFor="simulation">Simulação</label>
            </div>
            <div>
              <Field type="checkbox" name="genres" value="Puzzle" id="puzzle" />
              <label htmlFor="puzzle">Puzzle</label>
            </div>
            <ErrorMessage name="genres" component="div" className="error" />
          </label>
          <div>
            <label className="block mt-2 text-white">Algum comentário ou sugestão?</label>
            <Field as="textarea" id="comments" name="comments" placeholder="Insira seu comentário aqui..." className='border-1 border-white rounded-5 bg-opacity-10 text-black w-full'/>
            <ErrorMessage name="comments" component="div" className="error" />
          </div>
          <div className="justify-conten">
            <button type="submit" id="submit" className="bg-blue-500 text-white p-4 text-18 rounded-5 cursor-pointer mt-10">
              Enviar
            </button>
          </div>
        </fieldset>
      </Form>
    </Formik>
    </div>

  );
}

export default FormPage;
