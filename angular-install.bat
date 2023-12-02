# Descargar Node.js
echo Descargando Node.js...
curl -o nodejs_installer.msi https://nodejs.org/dist/v16.14.0/node-v16.14.0-x64.msi

# Instalar Node.js
echo Instalando Node.js...
start /wait msiexec /i nodejs_installer.msi /qn

# Instalar TypeScript globalmente
echo Instalando TypeScript...
npm i -g typescript@4.5.4

# Instalar Angular CLI globalmente
echo Instalando Angular CLI...
npm i -g @angular/cli@13.1.4

# Limpiar archivos temporales
echo Limpiando archivos temporales...
del nodejs_installer.msi

echo Proceso completado.
