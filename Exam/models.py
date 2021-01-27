from django.db import models
from django.contrib.auth.models import User
from Classroom.models import classroom


class Exam(models.Model):
    exam_name = models.CharField(max_length=200)
    classroom = models.ForeignKey(classroom, related_name="classroom_exam", on_delete=models.CASCADE)
    total_marks = models.IntegerField(default=0)
    time_duration = models.IntegerField(default=0)
    submitted = models.ManyToManyField(User, related_name="submitted", blank=True)
    status = models.BooleanField(default=0)

    def __str__(self):
        return self.exam_name

class Question(models.Model):
    question = models.TextField(max_length=500)
    exam_name = models.ForeignKey(Exam, on_delete=models.CASCADE)
    marks = models.PositiveIntegerField(default=0)
    option1 = models.CharField(max_length=100)
    option2 = models.CharField(max_length=100)
    option3 = models.CharField(max_length=100)
    option4 = models.CharField(max_length=100)
    choose = (('A', 'option1'), ('B', 'option2'), ('C', 'option3'), ('D', 'option4'))
    answer = models.CharField(max_length=1, choices=choose)
    duration = models.IntegerField(default=0)

    def __str__(self):
        return self.question


class Participants(models.Model):
    exam_name = models.ForeignKey(Exam, related_name="participants", on_delete=models.CASCADE)
    student_name = models.ForeignKey(User, on_delete=models.CharField)
    obtain_marks = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.student_name
