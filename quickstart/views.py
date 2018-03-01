from django.contrib.auth.models import User, Group
from django.shortcuts import render
from .models import Course, Curriculum, Room, Groupstudy, Teacher, TeacherImplementation, Implementation
from quickstart.serializers import CourseSerializer, CurriculumSerializer, GroupstudySerializer, ImplementationSerializer, RoomSerializer, TeacherSerializer, TeacherImplementationSerializer
from rest_framework import viewsets

# Create your views here.
class CourseViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
class CurriculumViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Curriculum.objects.all()
    serializer_class = CurriculumSerializer
class GroupstudyViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Groupstudy.objects.all()
    serializer_class = GroupstudySerializer
class ImplementationViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Implementation.objects.all()
    serializer_class = ImplementationSerializer
class RoomViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
class TeacherViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer
class TeacherImplementationViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = TeacherImplementation.objects.all()
    serializer_class = TeacherImplementationSerializer
