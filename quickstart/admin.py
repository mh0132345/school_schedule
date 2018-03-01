from django.contrib import admin

# Register your models here.
from .models import Course, Curriculum, Room, Groupstudy, Teacher, TeacherImplementation, Implementation
admin.site.register(Course)
admin.site.register(Curriculum)
admin.site.register(Room)
admin.site.register(Groupstudy)
admin.site.register(Teacher)
admin.site.register(TeacherImplementation)
admin.site.register(Implementation)