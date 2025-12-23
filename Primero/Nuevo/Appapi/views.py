from rest_framework import viewsets
from .models import Iconos, Botones, Cards, Inputs, Variados
from .serializable import IconosSerializer, BotonesSerializer, CardsSerializer, InputsSerializer, VariadosSerializer

class IconosViewSet(viewsets.ModelViewSet):
    queryset = Iconos.objects.all()
    serializer_class = IconosSerializer

class BotonesViewSet(viewsets.ModelViewSet):
    queryset = Botones.objects.all()
    serializer_class = BotonesSerializer

class CardsViewSet(viewsets.ModelViewSet):
    queryset = Cards.objects.all()
    serializer_class = CardsSerializer

class InputsViewSet(viewsets.ModelViewSet):
    queryset = Inputs.objects.all()
    serializer_class = InputsSerializer

class VariadosViewSet(viewsets.ModelViewSet):
    queryset = Variados.objects.all()
    serializer_class = VariadosSerializer


   # def get(self, request, *args, **kwargs):
   #       queryset = .objects.all()
   #       serializer = Serializable(queryset, many=True)
   #       return Response(serializer.data)
   #
   #
   # def post(self, request,*args, **kwargs):
   #    queryset = Serializable(data=request.data)
   #    if queryset.is_valid():
   #        queryset.save()
   #        return Response(queryset.data, status=status.HTTP_201_CREATED)







