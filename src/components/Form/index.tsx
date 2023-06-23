'use client';

import emailjs from '@emailjs/browser';

import styles from './styles.module.scss';
import { FormEvent, useRef, useState } from 'react';

export default function Form() {
  const formRef = useRef<HTMLFormElement>(null)

  const [dataForm, setDataForm] = useState({
    name: '',
    email: '',
    tel: '',
    segment: '',
    employees: '',
    invoicing: '',
    message: '',
  });

  const handleChangeValue = ({currentTarget}: {currentTarget: HTMLInputElement}) => {
    setDataForm((dataForm) => ({...dataForm, [currentTarget.name]: currentTarget.value}));
    console.log(currentTarget.name, currentTarget.value)
  };

  function sendEmail(event: FormEvent){
    event.preventDefault();

    emailjs.send('service_rusb2z2', 'template_vu1sz78', dataForm, '7k766DxYE0oyFA7MS')
    if(formRef.current) {
      formRef.current.reset();
    }
  }

  return(
    <section className={styles.container}>
      <div>
        <h2>Quer decolar sua empresa?</h2>
        <p>Deixe seu contato para um especialista entrar em contato com você!</p>
      </div>
      
      <div className={styles.formContainer}>
        <h3>Junte-se a +300 clientes satisfeitos</h3>
      
        <form action="" className={styles.form} onSubmit={sendEmail} ref={formRef}>
          <input 
            type="name" 
            name="name" 
            id="name" 
            placeholder='Qual o seu nome?' 
            required 
            onChange={handleChangeValue}
          />
          <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder='E-mail corporativo' 
            required 
            onChange={handleChangeValue}
          />
          <input 
            type="tel" 
            name="tel" 
            id="tel" 
            placeholder='Telefone - (21) 9 7026-3146' 
            required 
            maxLength={13}
            onChange={handleChangeValue}
          />
          <input 
            type="company" 
            name="company" 
            id="company" 
            placeholder='Nome da sua empresa' 
            required
            onChange={handleChangeValue} 
          />
          <input 
            type="segment" 
            name="segment" 
            id="segment" 
            placeholder='Qual o seu segmento?' 
            required
            onChange={handleChangeValue} 
          />
          <input 
            type="employees" 
            name="employees" 
            id="employees" 
            placeholder='Quantos funcionários tem sua empresa?' 
            required
            onChange={handleChangeValue} 
          />
          <input 
            type="invoicing" 
            name="invoicing" 
            id="invoicing" 
            placeholder='Qual o faturamento mensal da sua empresa?' 
            required
            onChange={handleChangeValue} 
          />
          
          <textarea name="message" id="message" cols={30} rows={10} placeholder='Qual seu principal desafio?' required />
          
          <input type="submit" value="Receber Avaliação Gratuita" required className={styles.submitBtn} />
        </form>

      </div>
    </section>
  )
}