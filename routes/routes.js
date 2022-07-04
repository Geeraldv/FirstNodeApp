const getRoute = function (req, res) {
    const url = req.url;
  
    if (url === "/") {
      res.setHeader("Content-Type", "text/html");
      res.write(`
          <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Inicio</title>
  
  </head>
  <body>
      <header>
          <ul>
              <li><a href="/valores">Valores</a></li>
              <li><a href="/skill">Skill</a></li>
              <li><a href="/proyectos">Proyectos</a></li>
              <li><a href="/contactos">Contacto</a></li>
          </ul>
      </header>
  
      <main>
          <section>
              <img width="300" src="./img/imagen.jpg" alt="">
              <p>Hola! Mi nombre es Geraldo y soy un gran apasionado por el desarrollo de software, me gusta desarrollar aplicaciones web que inspiren y motiven a las personas. Aun me encuentro en mi proceso de junior pero espero poder ganar mas experiencia para seguir desarrollando. </p>
              <p>Me agrada la idea de trabajar en equipo, pienso que es una manera de conectar con nuevas habilidades y de brindar mi conocimiento al equipo con el fin de mejorar la productividad en el desarrollo de algun producto digital.</p>
          </section>
      </main>
      <footer>© 2022 Geraldo Ventura</footer>
  </body>
  </html>
          `);
      res.end();
    } else if (url === "/valores") {
  
      res.setHeader("Content-Type", "text/html");
      res.write(`<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Valores</title>
      </head>
      <body>
          <main>
              <h1>Lista de valores</h1>
              <ul>
                  <li>Sinceridad</li>
                  <li>Empatia</li>
                  <li>Responsabilidad</li>
                  <li>Humildad</li>
                  <li>Solidaridad</li>
                  <li>Gratitud</li>
              </ul>
      
              <a href="/">Volver al inicio</a>
          </main>
      </body>
      </html>`);
      res.end();
  
  
    }else if(url === '/skill'){
  
      res.setHeader("Content-Type", "text/html");
      res.write(`<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Skill</title>
      </head>
      <body>
          <header>
              <h1>Skill</h1>
          </header>
      
          <main>
              <table border="2">
                  <tr>
                      <th>Conocimientos</th>
                      <th>Valoracion</th>
                  </tr>
                  <tr>
                      <td>HTML</td>
                      <td>5</td>
                  </tr>
                  <tr>
                      <td>CSS</td>
                      <td>4</td>
                  </tr>
                  <tr>
                      <td>JavaScript</td>
                      <td>3</td>
                  </tr>
                  <tr>
                      <td>SQL</td>
                      <td>2</td>
                  </tr>
                  <tr>
                      <td>Python</td>
                      <td>2</td>
                  </tr>
                  <tr>
                      <td>Git y Github</td>
                      <td>3</td>
                  </tr>
              </table>
              <a href="/">Volver al inicio</a>
          </main>
      
      </body>
      </html>`)
      res.end();
  
    }else if(url === '/proyectos'){
      res.setHeader('content-type','text/html');
      res.write(`<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Proyectos</title>
      </head>
      <body>
          <header>
              <h1>Proyectos</h1>
          </header>
      
          <main>
      
              <section>
                  <h3>Grid Card Component</h3>
                  <p>Este proyecto es una pagina web que trata acerca de mostrar Informacion de personas en una grid</p>
                  <a href="https://gridcardgeraldo.netlify.app/" target="_blank"><img src="../img/proyecto-1.jpg" width="300" alt="Foto de proyecto"/></a>
              </section>
      
              <section>
                  <h3>3 columnas preview</h3>
                  <p>Este proyecto es una pagina web que trata acerca de mostrar Informacion de carros en columnas</p>
                  <a href="https://3columnpreviewgeraldo.netlify.app" target="_blank"><img src="../img/proyecto-2.jpg" width="300" alt="Foto de proyecto"/></a>
              </section>
      
              <section>
                  <h3>Componente de Suscripcion</h3>
                  <p>Esto es una pagina web con un componente para contratar un plan anual</p>
                  <a href="https://cardordergeraldo.netlify.app/" target="_blank"><img src="../img/proyecto-3.jpg" width="300" alt="Foto de proyecto"/></a>
              </section>
      
              <section>
                  <h3>Card Preview price ETH</h3>
                  <p>Esto es una pagina web con un componente que permite ver el precio actual del ETH</p>
                  <a href="https://cardpreviewgerald.netlify.app" target="_blank"><img src="../img/proyecto-5.jpg" width="300" alt="Foto de proyecto"/></a>
              </section>
      
              <a href="/">Volver al inicio</a>
          </main>
          
      </body>
      </html>`)
      res.end()
  
    }else if(url === '/contactos'){
      res.setHeader('content-type','text/html');
      res.write(`<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Contacto</title>
      </head>
      <body>
          <header>
              <h1>Contacto</h1>
          </header>
      
          <form action="">
              <label for="">Nombre</label>
              <input type="text">
      
              <label for="">Apellido</label>
              <input type="text">
      
              <label for="">Correo</label>
              <input type="email">
      
              <label for="">Descripcion</label>
              <textarea name="" id="" cols="30" rows="1">Escribe una descripcion</textarea>
      
              <input type="submit" value="Enviar">
      
          </form>
      
          <a href="/">Volver al inicio</a>
          
      </body>
      </html>`)
      res.end()
    }else{
      res.setHeader('content-type','text/html');
      res.write(`<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>404</title>
      </head>
      <body>
          <header>
              <h1>404</h1>
          </header>
      
          <main>
              <h2>Pagina no encontrada</h2>
              <a href="/">Volver al inicio</a>
          </main>
      
      </body>
      </html>`)
      res.end()
    }
  
  
  
  };


module.exports = getRoute;