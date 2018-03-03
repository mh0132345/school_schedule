from django.contrib.auth.models import User, Group
from django.shortcuts import render
from .models import Course, Curriculum, Room, Groupstudy, Teacher, TeacherImplementation, Implementation
from quickstart.serializers import CourseSerializer, CurriculumSerializer, GroupstudySerializer, ImplementationSerializer, RoomSerializer, TeacherSerializer, TeacherImplementationSerializer
from rest_framework import viewsets
from django.db import connection
from django.http import JsonResponse
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

def teacher_course(self):
    with connection.cursor() as cursor:
        cursor.execute("select distinct(teacher.name), course.name from teacher inner join teacher_implementation on teacher.id = teacherid inner join implementation on implementationid = implementation.id inner join course on courseid = course.id;")
        rows = cursor.fetchall()
    data = []
    for row in rows:
        data.append({"teacher":row[0],"course":row[1]})
    return JsonResponse(data, safe=False)

def student_course(self):
    with connection.cursor() as cursor:
        cursor.execute("select course.name, implementation.group from implementation inner join course on courseid = course.id;")
        rows = cursor.fetchall()
    data = []
    for row in rows:
        data.append({"course":row[0],"group":row[1]})
    return JsonResponse(data, safe=False)

def teacher_degree(self):
    with connection.cursor() as cursor:
        cursor.execute("select distinct teacher.name, groupstudy.degreeprogram from (((teacher inner join teacher_implementation on teacher.id = teacherid)inner join implementation on implementationid = implementation.id) inner join groupstudy on implementation.group LIKE CONCAT('%', groupstudy.code ,'%'));")
        rows = cursor.fetchall()
    data = []
    for row in rows:
        data.append({"teacherName":row[0],"degree":row[1]})
    return JsonResponse(data, safe=False)
