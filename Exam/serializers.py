from rest_framework import serializers
from .models import Exam, Question, Participants

class ExamSerializer(serializers.ModelSerializer):
    submitted = serializers.StringRelatedField(many=True)

    class Meta:
        model = Exam
        fields = ['exam_name', 'total_marks', 'time_duration', 'submitted']

class CreateExamSerializer(serializers.ModelSerializer):

    class Meta:
        model = Exam
        fields = '__all__'

class ExamListSerializer(serializers.ModelSerializer):
    submitted = serializers.StringRelatedField(many=True)

    class Meta:
        model = Exam
        fields = ['exam_name', 'total_marks', 'status', 'submitted']

class QuestionSerializer(serializers.ModelSerializer):
    pass

class CreateQuestionSerializer(serializers.ModelSerializer):
    pass

class ParticipantSerializer(serializers.ModelSerializer):
    pass

class CreateParticipantSerializer(serializers.ModelSerializer):
    pass
