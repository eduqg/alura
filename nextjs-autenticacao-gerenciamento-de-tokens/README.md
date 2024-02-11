# nextjs-autenticacao-gerenciamento-de-tokens

https://github.com/alura-cursos/next-3-jwt/tree/projeto_inicial

## Http only (owasp)

Guarda cookie que extensões não vão poder pegar. Mas se acessar a url que existe esse cookie, vou conseguir acessar. O ponto é que não estará no navegador.

"Para se prevenir de ataques cross-site scripting (XSS,  Cross-Site Scriptin em inglês), os cookies HttpOnly são inacessíveis para a API JavaScript Document.cookie (en-US); eles são enviados só para o servidor. Por exemplo, cookies que persistem nas sessões de servidor não precisam estar disponíveis para o JavaScript e, portanto, a diretiva HttpOnly deve ser configurada." Alura
