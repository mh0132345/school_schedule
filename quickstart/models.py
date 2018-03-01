# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey has `on_delete` set to the desired behavior.
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=80)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    group_id = models.IntegerField()
    permission_id = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group_id', 'permission_id'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type_id = models.IntegerField()
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type_id', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.IntegerField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.CharField(max_length=254)
    is_staff = models.IntegerField()
    is_active = models.IntegerField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    user_id = models.IntegerField()
    group_id = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user_id', 'group_id'),)


class AuthUserUserPermissions(models.Model):
    user_id = models.IntegerField()
    permission_id = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user_id', 'permission_id'),)


class Course(models.Model):
    code = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    credit = models.IntegerField()
    curriculumid = models.ForeignKey('Curriculum', models.DO_NOTHING, db_column='curriculumid')

    class Meta:
        managed = False
        db_table = 'course'


class Curriculum(models.Model):
    groupid = models.ForeignKey('Groupstudy', models.DO_NOTHING, db_column='groupid')

    class Meta:
        managed = False
        db_table = 'curriculum'


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type_id = models.IntegerField(blank=True, null=True)
    user_id = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


class Groupstudy(models.Model):
    code = models.CharField(max_length=255)
    degreeprogram = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'groupstudy'


class Implementation(models.Model):
    group = models.CharField(max_length=255)
    courseid = models.ForeignKey(Course, models.DO_NOTHING, db_column='courseid')

    class Meta:
        managed = False
        db_table = 'implementation'


class Room(models.Model):
    room = models.CharField(max_length=255)
    topic = models.CharField(max_length=255)
    courseid = models.ForeignKey(Course, models.DO_NOTHING, db_column='courseid')

    class Meta:
        managed = False
        db_table = 'room'


class Teacher(models.Model):
    name = models.CharField(max_length=255)
    code = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'teacher'


class TeacherImplementation(models.Model):
    teacherid = models.ForeignKey(Teacher, models.DO_NOTHING, db_column='teacherid', primary_key=True)
    implementationid = models.ForeignKey(Implementation, models.DO_NOTHING, db_column='implementationid')

    class Meta:
        managed = False
        db_table = 'teacher_implementation'
        unique_together = (('teacherid', 'implementationid'),)
