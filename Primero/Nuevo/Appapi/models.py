from django.db import models

class Iconos(models.Model):
    id_icono = models.CharField(primary_key=True, max_length=100)
    nombre = models.CharField(max_length=100)
    codigo = models.CharField(max_length=4000, blank=True, null=True)

    class Meta:
        db_table = "iconos"
        verbose_name = "Icono"
        verbose_name_plural = "Iconos"

    def __str__(self):
        return self.nombre 

class Botones(models.Model):
    id_boton = models.CharField(primary_key=True, max_length=100)
    nombre = models.CharField(max_length=100)
    codigo = models.CharField(max_length=4000)
    

    class Meta:
        db_table = "botones"
        verbose_name = "Botón"
        verbose_name_plural = "Botones"

    def __str__(self):
        return self.nombre

class Cards(models.Model):
    id_card = models.CharField(primary_key=True, max_length=100)
    nombre = models.CharField(max_length=100)
    codigo = models.CharField(max_length=4000)
    
    class Meta:
        db_table = "cards"
        verbose_name = "Card"
        verbose_name_plural = "Cards"

    def __str__(self):
        return self.nombre

class Inputs(models.Model):
    id_input = models.AutoField(primary_key=True,max_length=100)
    nombre = models.CharField(max_length=100)
    codigo = models.CharField(max_length=4000)
    
    class Meta:
        db_table = "inputs"
        verbose_name = "Input"
        verbose_name_plural = "Inputs"

    def __str__(self):
        return self.nombre

class Variados(models.Model):
    id_variado = models.CharField(primary_key=True, max_length=100)
    nombre = models.CharField(max_length=100)
    codigo = models.CharField(max_length=4000)
   

    class Meta:
        db_table = "variados"
        verbose_name = "Variado"
        verbose_name_plural = "Variados"

    def __str__(self):
        return self.nombre
