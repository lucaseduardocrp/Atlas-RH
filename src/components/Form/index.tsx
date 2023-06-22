import styles from './styles.module.scss';

export default function Form() {
  return(
    <section className={styles.container}>
      <div>
        <h2>Quer decolar sua empresa?</h2>
        <p>Deixe seu contato para um especialista entrar em contato com você!</p>
      </div>
      
      <div className={styles.formContainer}>
        <h3>Junte-se a +300 clientes satisfeitos</h3>
      
        <form action="" className={styles.form}>
          <input type="name" name="name" id="name" placeholder='Qual o seu nome?' required />
          <input type="email" name="email" id="email" placeholder='E-mail corporativo' required />
          <input type="tel" name="tel" id="tel" placeholder='Telefone - (21) 9 7026-3146' required maxLength={13}/>
          <input type="text" name="text" id="text" placeholder='Nome da sua empresa' required />
          <select name="segment" id="segment" required>
            <option value="segmento">Qual o seu segmento</option>
            <option value="service">Serviço</option>
            <option value="retail">Varejo</option>
            <option value="factory">Indústria</option>
            <option value="ecommerce">E-commerce</option>
            <option value="sass">Sass</option>
            <option value="education">Educação</option>
            <option value="others">Outros</option>
          </select>
          <select name="employees" id="employees" required>
            <option value="employees">Quantos funcionários tem sua empresa?</option>
            <option value="0-1">0 a 1</option>
            <option value="2-10">2 a 10</option>
            <option value="11-20">11 a 20</option>
            <option value="21-50">21 a 50</option>
            <option value="51-100">51 a 100</option>
            <option value="100">+100</option>
          </select>
          <select name="invoicing" id="invoicing" required>
            <option value="invoicing">Qual o faturamento mensal da sua empresa?</option>
            <option value="low">Até 15 mil</option>
            <option value="medium">16 mil a 50 mil</option>
            <option value="regular">51 mil a 300 mil</option>
            <option value="large">301 mil a 1 milhão</option>
            <option value="extra-large">Mais de 1 milão</option>
          </select>
          
          <textarea name="message" id="message" cols={30} rows={10} placeholder='Qual seu principal desafio?' required />
          
          <input type="submit" value="Receber Avaliação Gratuita" required className={styles.submitBtn} />
        </form>

      </div>
    </section>
  )
}