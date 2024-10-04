# Використовуємо останню версію Node.js
FROM node:latest as build

# Вказуємо робочу директорію
WORKDIR /app

# Копіюємо файли package.json і package-lock.json
COPY package*.json ./

# Копіюємо скрипт установки
COPY setup.sh ./

# Додаємо права на виконання для скрипту
RUN chmod +x setup.sh

# Виконуємо скрипт для установки залежностей і збору проекту
#RUN ./setup.sh

# Копіюємо всі файли проекту
COPY ./ .

# Встановлюємо середовище для запуску
ENV HOST 0.0.0.0
EXPOSE 3030

# Запускаємо додаток
CMD ["yarn", "start"]
