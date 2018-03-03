"""school_schedule URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from rest_framework import routers
from quickstart import views

router = routers.DefaultRouter()
router.register(r'courses', views.CourseViewSet)
router.register(r'curriculums', views.CurriculumViewSet)
router.register(r'groupstudys', views.GroupstudyViewSet)
router.register(r'implementations', views.ImplementationViewSet)
router.register(r'rooms', views.RoomViewSet)
router.register(r'teachers', views.TeacherViewSet)
router.register(r'teacherimplematations', views.TeacherImplementationViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('admin/', admin.site.urls),
    url(r'^teachercourse/$', views.teacher_course, name='teacher_course'),
    url(r'^studentcourse/$', views.student_course, name='student_course'),
]