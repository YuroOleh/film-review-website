from rest_framework import status
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.response import Response
from .serializers import RegisterSerializer, LoginSerializer
from rest_framework_simplejwt.tokens import AccessToken
from rest_framework.permissions import IsAuthenticated
from .models import User

@api_view(["POST"])
def register(request):
    serializer = RegisterSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "User created successfully"}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(["POST"])
@authentication_classes([]) 
@permission_classes([])
def login(request):
    serializer = LoginSerializer(data=request.data)

    if serializer.is_valid():
        user = serializer.validated_data["user"]

        access_token = str(AccessToken.for_user(user))

        response = Response({"message": "Login successful"}, status=200)

        response.set_cookie(
            key="access",
            value=access_token,
            httponly=True,
            secure=False,      
            samesite="Lax"
        )

        return response

    return Response(serializer.errors, status=400)

@api_view(["POST"])
def logout(request):
    response = Response({"message": "Logged out successfully"}, status=200)
    response.delete_cookie("access")
    return response

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def me(request):
    user = request.user  
    return Response({
        "id": user.id,
        "email": user.email,
        "username": user.username,
        "date": user.created_at
    })


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def user(request, id):

    try:
        user = User.objects.get(id=id)
    except User.DoesNotExist:
        return Response({"error": "User not found"}, status=404)
    
    return Response({
        "user": user.id,
        "email": user.email,
        "username": user.username,
        "date": user.created_at
    })

