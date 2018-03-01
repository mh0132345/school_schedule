from django.contrib.auth.models import User, Group
from .models import Course, Curriculum, Room, Groupstudy, Teacher, TeacherImplementation, Implementation
from rest_framework import serializers

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')

class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')

class CourseSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Course
        fields = ('url', 'code', 'name', 'credit', 'curriculumid')

class CurriculumSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Curriculum
        fields = ('url', 'groupid')

class GroupstudySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Groupstudy
        fields = ('url', 'code', 'degreeprogram')

class ImplementationSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Implementation
        fields = ('url', 'group', 'courseid')

class RoomSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Room
        fields = ('url', 'room', 'topic', 'courseid')

class TeacherSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Teacher
        fields = ('url', 'name', 'code')

class TeacherImplementationSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = TeacherImplementation
        fields = ('url', 'teacherid', 'implementationid')