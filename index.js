import {OimoPhysics} from './OimoPhysics.js';

// dynamics
export const World = OimoPhysics.dynamics.World;
export const RigidBodyType = OimoPhysics.dynamics.rigidbody.RigidBodyType;
export const RigidBodyConfig = OimoPhysics.dynamics.rigidbody.RigidBodyConfig;
export const ShapeConfig = OimoPhysics.dynamics.rigidbody.ShapeConfig;
export const RigidBody = OimoPhysics.dynamics.rigidbody.RigidBody;
export const Shape = OimoPhysics.dynamics.rigidbody.Shape;
export const SphericalJoint = OimoPhysics.dynamics.constraint.joint.SphericalJoint;
export const RevoluteJointConfig = OimoPhysics.dynamics.constraint.joint.RevoluteJointConfig;
export const UniversalJointConfig = OimoPhysics.dynamics.constraint.joint.UniversalJointConfig;
export const CylindricalJoint = OimoPhysics.dynamics.constraint.joint.CylindricalJoint;
export const PrismaticJoint = OimoPhysics.dynamics.constraint.joint.PrismaticJoint;
export const PrismaticJointConfig = OimoPhysics.dynamics.constraint.joint.PrismaticJointConfig;
export const RevoluteJoint = OimoPhysics.dynamics.constraint.joint.RevoluteJoint;
export const RagdollJoint = OimoPhysics.dynamics.constraint.joint.RagdollJoint;
export const CylindricalJointConfig = OimoPhysics.dynamics.constraint.joint.CylindricalJointConfig;
export const SphericalJointConfig = OimoPhysics.dynamics.constraint.joint.SphericalJointConfig;
export const RagdollJointConfig = OimoPhysics.dynamics.constraint.joint.RagdollJointConfig;
export const SpringDamper = OimoPhysics.dynamics.constraint.joint.SpringDamper;
export const TranslationalLimitMotor = OimoPhysics.dynamics.constraint.joint.TranslationalLimitMotor;
export const RotationalLimitMotor = OimoPhysics.dynamics.constraint.joint.RotationalLimitMotor;
export const UniversalJoint = OimoPhysics.dynamics.constraint.joint.UniversalJoint;

// common
export const Vec3 = OimoPhysics.common.Vec3;
export const Quat = OimoPhysics.common.Quat;
export const Mat3 = OimoPhysics.common.Mat3;
export const MathUtil = OimoPhysics.common.MathUtil;
export const Transform = OimoPhysics.common.Transform;

// collision
export const OCapsuleGeometry = OimoPhysics.collision.geometry.CapsuleGeometry;
export const OConvexHullGeometry = OimoPhysics.collision.geometry.ConvexHullGeometry;
export const OBoxGeometry = OimoPhysics.collision.geometry.BoxGeometry;
export const OSphereGeometry = OimoPhysics.collision.geometry.SphereGeometry;
export const OCylinderGeometry = OimoPhysics.collision.geometry.CylinderGeometry;
export const OConeGeometry = OimoPhysics.collision.geometry.ConeGeometry;
export const OGeometry = OimoPhysics.collision.geometry.Geometry;

// callback
export const RayCastClosest = OimoPhysics.dynamics.callback.RayCastClosest;
