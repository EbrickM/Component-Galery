from rest_framework import serializers
from .models import Iconos, Botones, Cards, Inputs, Variados


class IconosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Iconos
        fields = '__all__'


class BotonesSerializer(serializers.ModelSerializer):
    icono_info = IconosSerializer(source='id_iconos', read_only=True)

    class Meta:
        model = Botones
        fields = '__all__'


class CardsSerializer(serializers.ModelSerializer):
    icono_info = IconosSerializer(source='id_iconos', read_only=True)

    class Meta:
        model = Cards
        fields = '__all__'


class InputsSerializer(serializers.ModelSerializer):
    icono_info = IconosSerializer(source='id_iconos', read_only=True)

    class Meta:
        model = Inputs
        fields = '__all__'


class VariadosSerializer(serializers.ModelSerializer):
    icono_info = IconosSerializer(source='id_iconos', read_only=True)

    class Meta:
        model = Variados
        fields = '__all__'

