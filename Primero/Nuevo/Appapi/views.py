from rest_framework.response import Response 
from rest_framework.decorators import action
from rest_framework import viewsets,status
from .models import Iconos, Botones, Cards, Inputs, Variados
from .serializable import IconosSerializer, BotonesSerializer, CardsSerializer, InputsSerializer, VariadosSerializer

class BotonesViewSet(viewsets.ModelViewSet):
    queryset = Botones.objects.all()
    serializer_class = BotonesSerializer
    
    @action(detail=False, methods=['delete','post','get'], url_path='deleteall', url_name='deleteall')
    def delete_all(self, request):
       
        contar = Botones.objects.count()
        Botones.objects.all().delete()
        
        return Response(
            {
                'message': f'Se eliminaron {contar} botones exitosamente',
                'deleted_count': contar
            },
            status=status.HTTP_200_OK  # <-- ¡Esto es lo que falta!
        ) 
class IconosViewSet(viewsets.ModelViewSet):
    queryset = Iconos.objects.all()
    serializer_class = IconosSerializer
    
    @action(detail=False, methods=['delete','post','get'], url_path='deleteall', url_name='deleteall')
    def delete_all(self, request):
       
        contar = Iconos.objects.count()
        Iconos.objects.all().delete()
        
        return Response(
            {
                'message': f'Se eliminaron {contar} iconos exitosamente',
                'deleted_count': contar
            },
            status=status.HTTP_200_OK  # <-- ¡Esto es lo que falta!
        ) 

class CardsViewSet(viewsets.ModelViewSet):
    queryset = Cards.objects.all()
    serializer_class = CardsSerializer
    
    @action(detail=False, methods=['delete','post','get'], url_path='deleteall', url_name='deleteall')
    def delete_all(self, request):
       
        contar = Cards.objects.count()
        Cards.objects.all().delete()
        
        return Response(
            {
                'message': f'Se eliminaron {contar} Cards exitosamente',
                'deleted_count': contar
            },
            status=status.HTTP_200_OK  # <-- ¡Esto es lo que falta!
        ) 

class InputsViewSet(viewsets.ModelViewSet):
    queryset = Inputs.objects.all()
    serializer_class = InputsSerializer
    
    @action(detail=False, methods=['delete','post','get'], url_path='deleteall', url_name='deleteall')
    def delete_all(self, request):
       
        contar = Inputs.objects.count()
        Inputs.objects.all().delete()
        
        return Response(
            {
                'message': f'Se eliminaron {contar} inputs exitosamente',
                'deleted_count': contar
            },
            status=status.HTTP_200_OK  # <-- ¡Esto es lo que falta!
        ) 
class VariadosViewSet(viewsets.ModelViewSet):
    queryset = Variados.objects.all()
    serializer_class = VariadosSerializer

    @action(detail=False, methods=['delete','post','get'], url_path='deleteall', url_name='deleteall')
    def delete_all(self, request):
       
        contar = Variados.objects.count()
        Variados.objects.all().delete()
        
        return Response(
            {
                'message': f'Se eliminaron {contar} iconos exitosamente',
                'deleted_count': contar
            },
            status=status.HTTP_200_OK  # <-- ¡Esto es lo que falta!
        ) 
 





