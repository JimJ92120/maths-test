type Vec2 = [number, number];
type Vec3 = [number, number, number];
type Vec4 = [number, number, number, number];

const VEC_3: Vec3 = [...Array(3).keys()] as Vec3;

type Matrix2 = [Vec2, Vec2];
type Matrix3 = [Vec3, Vec3, Vec3];
type Matrix4 = [Vec4, Vec4, Vec4, Vec4];

export { Vec2, Vec3, Vec4, VEC_3, Matrix2, Matrix3, Matrix4 };
