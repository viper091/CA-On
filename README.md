# Carteira de Vacinação Online

TCC Desenvolvido utlizando os frameworks Angular 6 e Laravel 

# Instalação

## API - Laravel

Entre na pasta:
```cd api```
Instale os pacotes
```composer install```

### Configure .env

Gere as keys necessarias:

```php artisan jwt:secret```
```php artisan key:generate```

Adicione as configurações do banco de dados em seguida rode as migrations:

```php artisan migrations --seed```

### Inicie o servidor

```php artisan serve```


## Angular 

Entre na pasta

```cd angular```
Instale os pacotes

```npm install```

Em seguida compile utilizando :

```ng build ```



