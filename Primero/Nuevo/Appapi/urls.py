from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router=DefaultRouter()

router.register(r'iconos', views.IconosViewSet)
router.register(r'botones', views.BotonesViewSet)
router.register(r'cards', views.CardsViewSet)
router.register(r'inputs', views.InputsViewSet)
router.register(r'variados', views.VariadosViewSet)





urlpatterns = [
    path('api/', include(router.urls)),
    #path('list/', Listabase.as_view(), name='datos'),
    # path('update/<str:pk>/', Updatebase.as_view(), name='mas datos'),

]